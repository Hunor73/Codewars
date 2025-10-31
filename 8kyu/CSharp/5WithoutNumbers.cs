using System; // Math.Abs

namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* 5 without numbers !!
             * Write a function that always returns 5

            Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

            Good luck :) */

            Console.WriteLine(Kata.UnusualFive());

        }

        class Kata
        {
            public static int UnusualFive()
            {
                return "false".Length;
            }
        }
    }
}