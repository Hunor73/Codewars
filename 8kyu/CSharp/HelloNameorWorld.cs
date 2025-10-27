using System;

namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {

            /* Hello, Name or World!
             * 
             * Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

               Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

                Examples:

                * With `name` = "john"  => return "Hello, John!"
                * With `name` = "aliCE" => return "Hello, Alice!"
                * With `name` not given 
                  or `name` = ""        => return "Hello, World!" */

            Console.WriteLine(Kata.Hello("john"));   // Output: Hello, John!

        }

        public static class Kata
        {
            public static string Hello(string name = "")
            {
                if (string.IsNullOrEmpty(name))
                {
                    return "Hello, World!";
                }
                // Capitalize the first letter and return the greeting
                return "Hello, " + char.ToUpper(name[0]) + name.Substring(1).ToLower() + "!";
            }
        }
    
    }
}