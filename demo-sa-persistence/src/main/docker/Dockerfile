FROM frolvlad/alpine-oraclejdk8
VOLUME /tmp
ADD demo-sa-persistence-1.0.jar demo-sa-persistence.jar
RUN sh -c 'touch /demo-sa-persistence.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /demo-sa-persistence.jar" ]