package advent
import scala.io.Source


object Advent extends Greeting with App {
  def loadFile(path: String): String = {
    Source.fromFile(path).mkString.trim;
  }
  println(greeting)
}

trait Greeting {
  lazy val greeting: String = "Merry Christmas!"
}

