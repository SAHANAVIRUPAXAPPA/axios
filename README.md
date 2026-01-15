# AXIOS – Credit Scoring & Risk Assessment Platform

AXIOS is a full-stack Credit Scoring and Risk Assessment System that evaluates user creditworthiness using transactional behavior and produces explainable, auditable credit scores.

---

## ?? Features
- Real-time credit score computation
- Explainable scoring (base + variable)
- API key–based security
- Risk classification (LOW / MEDIUM / HIGH)
- Spring Boot REST APIs
- Lightweight frontend UI

---

## ?? Tech Stack

Backend:
- Java 17
- Spring Boot 3.2
- Spring Security
- Spring Data JPA
- Hibernate
- H2 Database

Frontend:
- HTML
- CSS
- JavaScript (Fetch API)

---

## ?? Project Structure

axios/
+-- backend/
¦   +-- src/main/java/com/axios/credit
¦   +-- src/main/resources
¦   +-- pom.xml
+-- frontend/
¦   +-- index.html
¦   +-- style.css
¦   +-- app.js
+-- README.md

---

## ?? Security
- API key authentication
- Role-based access
- Separate USER and BANK access

---

## ?? API Endpoints

GET /api/score/{userId}  
Header: X-API-KEY: USER-123-KEY

GET /api/score/explain/{userId}  
Header: X-API-KEY: BANK-456-KEY

GET /actuator/health

---

## ?? Run Backend

cd backend  
mvn clean package -DskipTests  
java -jar target/axios-backend-0.1.0.jar

---

## ?? Run Frontend
Open frontend/index.html in browser

---

## ????? Author
Sahanavirupaxappa  
GitHub: https://github.com/SAHANAVIRUPAXAPPA
