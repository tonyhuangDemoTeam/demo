FROM frolvlad/alpine-oraclejdk8
VOLUME /tmp
ADD demo-fos-persistence-1.0.jar demo-fos-persistence.jar
RUN sh -c 'touch /demo-fos-persistence.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /demo-fos-persistence.jar" ]