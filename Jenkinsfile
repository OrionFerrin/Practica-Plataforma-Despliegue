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
                sh 'chmod +x ./node_modules/.bin/jest'  // Soluciona el problema de permisos
                sh 'test/server.test.js --ci --runInBand' // Ejecuta los tests de Jest
            }
        }
 
        }
        stage('Build Docker image') {
            steps {
                sh 'docker build -t school-cafeteria-api .'
            }
        }
    }
    post {
        always {
            junit 'test-results.xml'
            archiveArtifacts artifacts: 'school-cafeteria-api.tar', fingerprint: true
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }