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
      
        stage ('Check-Git-Secret') {
          steps {
            sh 'rm truefflehog-output || true'
            sh 'docker run gesellix/trufflehog --json https://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@github.com/Mouhamed-git/contaApp.git > truefflehog-output'
            sh 'cat truefflehog-output'
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
                   sh 'scp -o StrictHostKeyChecking=no -r dist/** ubuntu@ec2-34-238-246-116.compute-1.amazonaws.com:~/'
               }
         }
       }
    }
}
