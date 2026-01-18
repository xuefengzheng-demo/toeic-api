# TOEIC Questions API

这是一个为托业词汇测试提供数据支持的后端服务。

## 🚀 快速启动

1.  **环境要求**: Node.js v14+
2.  **安装依赖**:
    ```bash
    npm install
    ```
3.  **启动服务器**:
    ```bash
    node server.js
    ```
    服务器默认运行在 `http://localhost:3000`。

## 📖 接口文档

### 1. 获取特定分类的题目
返回指定场景下的所有托业词义辨析题。

-   **URL**: `/api/questions/:category`
-   **方法**: `GET`
-   **URL 参数**:
    -   `category` (必填): 题目分类，可选值如下：
        -   `office`: 商务办公
        -   `finance`: 金融财务
        -   `travel`: 差旅接待
        -   `tech`: 技术协作
-   **响应示例 (JSON)**:
    ```json
    [
      {
        "id": 1,
        "question": "The marketing team needs to (  ) the presentation...",
        "options": ["A. finalize", "B. finally", "C. final", "D. finalized"],
        "correct": 0,
        "explanation": "finalize 是动词，意为“完成/敲定”..."
      }
    ]
    ```

## 📂 数据结构

题目数据维护在 `data/questions.json` 中，包含 260 道核心词汇题。

## 🔧 开发说明

-   **CORS**: 已启用跨域资源共享，支持前端应用直接调用。
-   **错误处理**: 若请求不存在的分类，将返回 `404 Not Found`。
