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
        
        // Se eliminó la llave de cierre extra que estaba aquí.
 
        stage('Build Docker image') {
            steps {
                sh 'docker build -t school-cafeteria-api .'
            }
        }
    } // El bloque 'stages' ahora cierra aquí, incluyendo todas las etapas.
   
}