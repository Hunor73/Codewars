using System; // Math.Abs

namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Remove exclamation marks
             Write the function RemoveExclamationMarks which removes all exclamation marks from a given string. */

            Console.WriteLine(Kata.RemoveExclamationMarks("Hello World!"));

        }

        public class Kata
        {
            public static string RemoveExclamationMarks(string s)
            {
                return s.Replace("!", "");
            }
        }
    }
}