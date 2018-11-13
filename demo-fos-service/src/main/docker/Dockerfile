FROM frolvlad/alpine-oraclejdk8
VOLUME /tmp
ADD demo-fos-service-1.0.jar demo-fos-service.jar
RUN sh -c 'touch /demo-fos-service.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /demo-fos-service.jar" ]