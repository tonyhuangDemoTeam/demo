FROM frolvlad/alpine-oraclejdk8
VOLUME /tmp
ADD demo-zuul-1.0.jar demo-zuul.jar
RUN sh -c 'touch /demo-zuul.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /demo-zuul.jar" ]