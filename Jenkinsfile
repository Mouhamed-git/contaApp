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
            sh 'rm truefflehog.json || true'
            sh 'docker run gesellix/trufflehog --json https://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@github.com/Mouhamed-git/contaApp.git > truefflehog.json'
            sh 'cat truefflehog.json'
          }
        }
      
        stage ('Source-Code-Analysis') {
          steps {
            sh 'rm owasp* || true'
            sh 'curl -o owasp-dependency-check.sh https://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@raw.githubusercontent.com/Mouhamed-git/contaApp/master/owasp-dependency-check.sh?token=GHSAT0AAAAAABRCFFZSRG7DJP4JDCQBCZX2YSEF4GA'
            sh 'bash owasp-dependency-check.sh'
            sh 'cat /var/lib/jenkins/reports/OWASP-Dependency-Check/reports/dependency-check-report.xml'
          }
        }
      
        stage ('build') {
           steps {
                sh 'rm /var/lib/jenkins/workspace/contaApp-devsecops-pipeline/dist || true'
                sh 'npm run build'
            }
        }

        stage ('deploy') {
           steps {
               sshagent(['nginx']) {
                   sh 'scp -o StrictHostKeyChecking=no -r dist/** ubuntu@ec2-3-87-227-172.compute-1.amazonaws.com :~/'
               }
         }
       }
    }
}
