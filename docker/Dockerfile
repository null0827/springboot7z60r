FROM swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/openjdk:17

LABEL authors="9109222249@email.ncu.edu.cn"

WORKDIR /opt/app

COPY myapp.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]