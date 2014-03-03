name := "TheDonorsChoice"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  "org.webjars" %% "webjars-play" % "2.2.0",
  "org.webjars" % "jquery" % "2.1.0-2",
  "org.webjars" % "bootswatch-flatly" % "3.1.1",
  "org.webjars" % "handlebars" % "1.2.1",
  "org.webjars" % "backbonejs" % "1.1.2",
  "org.webjars" % "underscorejs" % "1.6.0-1"
)     

play.Project.playJavaSettings
