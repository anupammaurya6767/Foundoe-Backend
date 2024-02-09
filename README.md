# Foundoe-Backend

### Installation

1. Clone the repository:

   ```bash
   https://github.com/anupammaurya6767/Foundoe-Backend.git
   ```

2. Change into the project directory:

   ```bash
   cd Foundoe-Backend
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

### Usage

#### Run Locally

1. Start the Flask server:

   ```bash
   python app.py
   ```

   The server will be accessible at [http://127.0.0.1:5000](http://127.0.0.1:5000).

2. Use tools like `curl` or Postman to send requests to the `/upload` endpoint.

#### Run with Docker

Alternatively, you can use Docker to run the Flask server in a container.

1. Build the Docker image:

   ```bash
   docker build -t flask-server .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 5000:5000 flask-server
   ```

   The server will be accessible at [http://127.0.0.1:5000](http://127.0.0.1:5000).

### API Endpoints

#### `/upload` (POST)

- Accepts file uploads (txt, pdf) or a URL in a POST request.
- Processes the content based on the file type or URL.
- Returns a JSON response with the processed data.

   Example:
   ```bash
   curl -X POST -F "file=@path/to/file.txt" http://127.0.0.1:5000/upload
   ```
