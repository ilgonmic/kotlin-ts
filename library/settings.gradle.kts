pluginManagement {
    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
        maven {
            url = uri("https://dl.bintray.com/kotlin/kotlin-eap")
        }
        maven {
            url = uri("https://dl.bintray.com/kotlin/kotlin-dev")
        }
    }
    
}
rootProject.name = "library"

