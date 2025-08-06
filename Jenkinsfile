pipeline {
    agent any

    tools {
        nodejs "Node24"
        dockerTool "Dockertool" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install' 
            }
        }
        
        stage('Ejecutar Tests') {
            steps {
                sh 'chmod +x ./node_modules/.bin/jest'
                // Comando simple que fallará si los tests fallan
                sh 'npm test -- --ci --runInBand --forceExit'
                // No se necesitan bloques try-catch porque el pipeline fallará automáticamente
            }
        }
 
        stage('Build Docker image') {
            // Esta etapa solo se ejecutará si todas las anteriores fueron exitosas
            steps {
                sh 'docker build -t school-cafeteria-api .'
            }
        }
    }
}