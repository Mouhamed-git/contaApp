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
      
        stage ('Source-Code-Analysis') {
          steps {
            sh 'rm owasp* || true'
            sh 'wget "https://raw.githubusercontent.com/Mouhamed-git/contaApp/master/owasp-dependency-check.sh?token=GHSAT0AAAAAABRCFFZTELCDU2T45U67PDCMYSDXY4Q'
            sh 'mv owasp-dependency-check.sh?token=GHSAT0AAAAAABRCFFZTELCDU2T45U67PDCMYSDXY4Q owasp-dependency-check.sh'
            sh 'chmod +x owasp-dependency-check.sh'
            sh 'bash owasp-dependency-check.sh'
            sh 'cat /var/lib/jenkins/reports/OWASP-Dependency-Check/reports/dependency-check-report.xml'
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
