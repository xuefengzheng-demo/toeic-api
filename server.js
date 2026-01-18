const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const questionsFile = path.join(__dirname, 'data', 'questions.json');

let toeicQuestions = {};

// 加载数据
try {
    const data = fs.readFileSync(questionsFile, 'utf8');
    toeicQuestions = JSON.parse(data);
    console.log(`Successfully loaded ${Object.keys(toeicQuestions).length} categories.`);
} catch (err) {
    console.error('Error loading questions:', err);
    process.exit(1);
}

// 获取分类题目接口
app.get('/api/questions/:category', (req, res) => {
    const category = req.params.category;
    if (toeicQuestions[category]) {
        res.json(toeicQuestions[category]);
    } else {
        res.status(404).json({ error: 'Category not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
