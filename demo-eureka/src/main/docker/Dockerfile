FROM frolvlad/alpine-oraclejdk8
VOLUME /tmp
ADD demo-eureka-1.0.jar demo-eureka.jar
RUN sh -c 'touch /demo-eureka.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /demo-eureka.jar" ]