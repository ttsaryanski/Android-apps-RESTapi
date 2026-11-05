# Android apps RESTapi - [Live API](https://notes-api-1034694665482.europe-west4.run.app/) ⚠️Under development

    - use /api/docs - does not support request execution
    - use /api/notes - Notes collection
    - use /api/meals - Meals collection
    - use /api/cocktails - Cocktails collection

## ℹ️ About the Project

    This REST API started as an educational project for learning TypeScript and backend development during my studies at SoftUni. Since then, it has evolved into a fully functional production API that serves Android applications published on Google Play Store.

    The API provides backend services for recipes, meal recommendations, and cocktail suggestions across Android apps with of active users.

    **Original Purpose:** Educational exercise in type safety and best practices in code structure.
    **Current Purpose:** Production API powering Android applications on Google Play Store.

## 📚 API Collections

### Notes

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/{noteId}` - Get a note by ID
- `PUT /api/notes/{noteId}` - Update a note by ID
- `DELETE /api/notes/{noteId}` - Delete a note by ID

### Meals

- `GET /api/meals/top` - Get top meals (sorted by count)
- `POST /api/meals/increment` - Increment meal count (creates if doesn't exist)

### Cocktails

- `GET /api/cocktails/top` - Get top cocktails (sorted by count)
- `POST /api/cocktails/increment` - Increment cocktail count (creates if doesn't exist)

## 📱 Android Applications Using This API

This API collects search statistics and generates rankings of trending items based on their popularity for Android applications published on the Google Play Store:

- **Meals - A Delicious Journey** - [Google Play](https://play.google.com/store/apps/details?id=com.ttsaryanski.cocktails) - Browse and discover recipes from around the world
- **Cocktails - Bar in Pocket** - [Google Play](https://play.google.com/store/apps/details?id=com.ttsaryanski.meals) - Explore cocktail recipes and recommendations

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB (with Mongoose)
- Google Cloud Platform (GCP)
- RESTful architecture
- Middleware and error handling
- Validation and modular routing

## 🎯 Learning Goals

- Practicing TypeScript in a backend environment
- Structuring a scalable REST API
- Applying type-safe request/response handling
- Working with async/await and error management
- Using environment variables and configuration

# SETUP GUIDE

## 1. Install Dependencies

⚠️ **Note:** To install the necessary dependencies for the NOTES API server, open a terminal and run:

```sh
cd NOTES API
npm install
```

## 2. Environment Variables Configuration

⚠️ **Note:** To run this server, create a `.env` file in the root directory and configure the following environment variables:

### Required Variables:

- **CLOUD_DB_URL**: The connection string for a cloud database (e.g., MongoDB Atlas).  
  _Example:_ `mongodb+srv://username:password@cluster0.mongodb.net/dbname`

### Steps to Set Up `.env`:

1. Create a file named `.env` in the root directory.
2. Add the required environment variables in the following format:

    ```sh
    CLOUD_DB_URL=<your-cloud-database-url>
    ```

3. Save the file.

## 3. Start the NOTES API Server

⚠️ **Note:** Run the following command to start the server:

```sh
npm start
```

If everything is set up correctly, you should see output similar to:

```
Server running on http://localhost:3000
Successfully connected to the cloud DB!
```

## 4. Use Documentation

```
After server is on, go to http://localhost:3000/api/docs
```
