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
        stage('Run server.test.js') {
            steps {
                sh 'test/server.test.js'
            }
        }
        stage('Build Docker image') {
            steps {
                sh 'docker build -t school-cafeteria-api .'
            }
        }
    }
}