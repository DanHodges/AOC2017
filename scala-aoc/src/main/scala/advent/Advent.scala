package advent
import scala.io.Source


object Advent extends Greeting with Loader with App {
  println(greeting)
}

trait Greeting {
  lazy val greeting: String = "Merry Christmas!"
}

trait Loader {
  def loadFile(path: String): String = {
    Source.fromFile(path).mkString.trim;
  }
}


