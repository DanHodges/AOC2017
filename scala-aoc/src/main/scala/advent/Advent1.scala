package advent

class Advent1 extends Loader {
  def sumCaptcha(input: String): Int = {
    val digits = input.toList.map(_.asDigit)
    digits.zipWithIndex
      .filter {
        case(value, index) =>
          value == digits((index + 1) % digits.length)
      }
      .map(_._1).sum
  }
}
