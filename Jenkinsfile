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
                script {
                    try {
                        // Ejecutar tests con reporte JUnit
                        sh '''
                            chmod +x ./node_modules/.bin/jest
                            npm test -- --ci --runInBand --forceExit --reporters=default --reporters=jest-junit
                        '''
                    } catch (error) {
                        echo "Tests fallidos: ${error}"
                        currentBuild.result = 'FAILURE'
                        error("Tests fallidos, deteniendo pipeline")
                    }
                }
            }
            post {
                always {
                    // Archivar reporte de tests
                    junit 'junit.xml'
                    // Opcional: Archivar logs de consola
                    archiveArtifacts artifacts: '*.log', allowEmptyArchive: true
                }
            }
        }
 
        stage('Build Docker image') {
            when {
                expression { currentBuild.result == 'SUCCESS' }
            }
            steps {
                sh 'docker build -t school-cafeteria-api .'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completado - Estado: ${currentBuild.currentResult}'
        }
        failure {
            emailext (
                subject: 'FAILED: Pipeline ${env.JOB_NAME} - Build ${env.BUILD_NUMBER}',
                body: 'Los tests fallaron. Por favor revisa el build: ${env.BUILD_URL}',
                to: 'tu-email@ejemplo.com'
            )
        }
    }
}