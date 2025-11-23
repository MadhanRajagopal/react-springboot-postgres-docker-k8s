# ---------- Build Stage ----------
FROM maven:3.8.7-eclipse-temurin-17 AS build
WORKDIR /backend
COPY pom.xml .
COPY src ./src
RUN mvn -B -DskipTests package

# ---------- Runtime Stage ----------
FROM eclipse-temurin:17-jre-alpine AS runtime
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy the JAR
COPY --from=build /backend/target/*.jar employee-service.jar
RUN chown appuser:appgroup /app/employee-service.jar

USER appuser
EXPOSE 5000
ENTRYPOINT ["java","-jar","/app/employee-service.jar"]
