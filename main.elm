import ListProc
import Text(plainText)

main = plainText <| ListProc.takeWhileString ((/=) ' ') "Hello, World!"
