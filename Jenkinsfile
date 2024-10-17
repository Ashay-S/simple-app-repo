pipeline {
  agent any
  stages {
    stage('Build Backend') {
      steps {
        sh 'docker build -t simple-backend ./backend'
      }
    }
    stage('Build Frontend') {
      steps {
        sh 'docker build -t simple-frontend ./frontend'
      }
    }
    stage('Deploy to Azure') {
      steps {
        sh 'docker tag simple-backend devopsapplication.azurecr.io/simple-backend'
        sh 'docker push devopsapplication.azurecr.io/simple-backend'
        sh 'docker tag simple-frontend devopsapplication.azurecr.io/simple-frontend'
        sh 'docker push devopsapplication.azurecr.io/simple-frontend'
      }
    }
  }
}
