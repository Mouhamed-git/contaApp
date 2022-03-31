pipeline {
    agent any
    stages {
       stage ('Checkout') {
         steps {
            sh 'git checkout master'
         }
        }
        stage ('Initialize') {
            steps {
                sh 'npm install'
            }
       }

        stage ('build') {
           steps {
                sh 'npm run build'
            }
       }

        stage ('deploy') {
           steps {
               sshagent(['nginx']) {
                   sh 'scp -o StrictHostKeyChecking=no -r dist/** ubuntu@ec2-35-172-128-125.compute-1.amazonaws.com:~/'
               }
           }
       }
    }
}
