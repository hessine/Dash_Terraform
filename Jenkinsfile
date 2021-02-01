#!/usr/bin/env groovy
node {
    properties([
        disableConcurrentBuilds(),
        buildDiscarder(logRotator(daysToKeepStr: '10', numToKeepStr: '5', artifactNumToKeepStr: '1'))
    ])	
    try {
        stage('checkout') {
            checkout scm
        }
        docker.image('openjdk:8').inside('-u root -v $HOME/.m2:/root/.m2') {
            try {
                stage('check java') {
                    sh "java -version"
                }
             
              
            } finally {
                sh "chmod -R 777 ."
            }
        }
        if (env.BRANCH_NAME == "master") {
        buildAndPushDocker('master', 'deployment')
        }
    } catch (e) {
        currentBuild.result = "FAILED"
        //notifyFailed()
        throw e
    } finally {
       deleteDir()
    }
}
def buildAndPushDocker(version, projectName) {
    def dockerImage = "accretio-hub.advyteam.com/${projectName}:${version}"
    stage('build docker') {
        sh "docker build -t ${dockerImage} ."
    }

    stage('publish docker') {
        sh "docker push ${dockerImage}"
    }
}
