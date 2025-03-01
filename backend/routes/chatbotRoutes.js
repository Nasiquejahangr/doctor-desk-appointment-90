const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// ✅ Ensure API key is available
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("❌ ERROR: GEMINI_API_KEY is missing. Please set it in your .env file.");
    process.exit(1);
}

// ✅ Initialize Gemini AI with the correct API key
const genAI = new GoogleGenerativeAI(API_KEY);

// ✅ Use the correct model name and API version
const generateChatResponse = async (query) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // ✅ Correct model name

        // Prepare the request in the correct format
        const requestPayload = {
            contents: [{ role: "user", parts: [{ text: query }] }]
        };

        const result = await model.generateContent(requestPayload);

        if (!result || !result.response) {
            throw new Error("Invalid response from Gemini AI.");
        }

        return result.response.text();
    } catch (error) {
        console.error('❌ Gemini AI Error:', error.message || error);
        throw new Error("Failed to generate chat response.");
    }
};

// ✅ Define the chat API endpoint
router.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ 
                error: 'Invalid request',
                message: 'Message is required and must be a string' 
            });
        }

        console.log(`📩 Received message: "${message}"`);

        const response = await generateChatResponse(message);
        
        console.log(`🤖 AI Response: "${response.substring(0, 100)}..."`);

        res.json({ response });
    } catch (error) {
        console.error('❌ Chat endpoint error:', error);
        res.status(500).json({ 
            error: 'Chat processing failed',
            message: error.message || 'Failed to generate response'
        });
    }
});


module.exports = router;
