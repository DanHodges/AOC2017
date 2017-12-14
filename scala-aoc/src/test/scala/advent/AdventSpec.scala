package advent

import org.scalatest._

class AdventSpec extends FlatSpec with Matchers {
  behavior of "The Advent object"

  it should "say hello" in {
    Advent.greeting shouldEqual "Merry Christmas!"
  }

  it should "read a file" in {
    Advent.loadFile("../resources/test.txt") shouldEqual "foo bar baz"
  }
}
