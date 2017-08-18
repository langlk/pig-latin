# Pig Latin Translator

#### _Epicodus Practice in JavaScript, HTML, and CSS, August 16, 2017_

#### By Kelsey Langlois, Luciano Oliveira

## Description

_Site made to practice Behavior Driven Development, JavaScript, and Regular Expressions. Takes a string from the user and translates it to Pig Latin._

## Setup/Installation Requirements

_You can view this project on GitHub pages at [langlk.github.io/pig-latin](https://langlk.github.io/pig-latin/). To install on your own computer, follow the steps below:_

* Clone this repository
* Open index.html in web browser of your choice

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
* If q is a leading consonant, program moves the u that follows it as well.
  * Example Input: query
  * Example Output: eryquay
  * Example Input: squirrel
  * Example Output: irrelsquay
* The program treats "y" as a consonant when a multiple-letter word's first letter is "y".
  * Example Input: yes
  * Example Output: esyay
  * Example Input: Psychology
  * Example Output: ychologyPsay
* The program moves non-alphabet characters at end of original word to the end of the Pig Latin word.
  * Example Input: Hello!
  * Example Output: elloHay!
* The program ignores non-alphabet characters inside a word.
  * Example Input: It's
  * Example Output: It'sway
* The program ignores non-alphabet characters at the front of a word.
  * Example Input: 'Sup
  * Example Output: 'upSay
* The program does the above for a string with multiple space-separated words.
  * Example Input: This is Pig Latin
  * Example Output: isThay isway igPay atinLay

  ## Support and contact details

  _Please contact Kelsey Langlois at kels.langlois@gmail.com, or Luciano Oliveira with questions, comments, or issues._

  ## Technologies Used

  * HTML
  * CSS
  * Bootstrap
  * JavaScript

  ### License

  Copyright (c) 2017 **Kelsey Langlois, Luciano Oliveira**

  *This software is licensed under the MIT license.*
