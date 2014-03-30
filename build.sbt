name := "TheDonorsChoice"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  "org.webjars" %% "webjars-play" % "2.2.1-2",
  "org.webjars" % "requirejs-plugins" % "1.0.2",
  "org.webjars" % "jquery" % "2.1.0-2",
  "org.webjars" % "bootswatch-flatly" % "3.1.1",
  "org.webjars" % "backbonejs" % "1.1.2",
  "org.webjars" % "underscorejs" % "1.6.0-1",
  "commons-io" % "commons-io" % "2.4",
  "com.lambdaworks" % "scrypt" % "1.4.0"
)

play.Project.playJavaSettings
