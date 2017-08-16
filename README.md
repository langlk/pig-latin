## Specifications

* The program does nothing for an empty string.
  * Example Input: 
  * Example Output:
* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Example Input: 3
  * Example Output: 3
* The program adds "way" to single-letter words beginning with a vowel.
  * Example Input: i
  * Example Output: iway
* The program adds "ay" to single-letter words beginning with a consonant.
  * Example Input: m
  * Example Output: may
* The program adds "way" to multiple-letter words beginning with a vowel.
  * Example Input: apple
  * Example Output: appleway
* The program moves the first letter of the word, plus "ay" to the end of multiple-letter words beginning with a consonant.
  * Example Input: Hello
  * Example Output: elloHay
* The program moves all leading consonants, plus "ay" to the end of a multiple-letter word beginning with more than one consonant.
  * Example Input: Three
  * Example Output: eeThray
* The program moves "qu," plus "ay" to the end of a multiple-letter word starting with "qu."
  * Example Input: query
  * Example Output: eryquay
* The program treats "y" as a consonant when a multiple-letter word's first letter is "y".
  * Example Input: yes
  * Example Output: esyay
  * Example Input: Psychology
  * Example Output: ychologyPsay
* The program moves non-alphanumeric characters to the end of the Pig Latin word.
  * Example Input: Hello!
  * Example Output: elloHay!
* The program does the above for a string with multiple space-separated words.
  * Example Input: This is Pig Latin
  * Example Output: isThay isway igPay atinLay
