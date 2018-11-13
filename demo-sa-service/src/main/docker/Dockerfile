FROM frolvlad/alpine-oraclejdk8
VOLUME /tmp
ADD demo-sa-service-1.0.jar demo-sa-service.jar
RUN sh -c 'touch /demo-sa-service.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /demo-sa-service.jar" ]