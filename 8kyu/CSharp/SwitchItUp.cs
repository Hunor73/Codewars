namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Switch it Up!
             * 
             * When provided with a number between 0-9, return it in words.  Note that the input is guaranteed to be within the range of 0-9.

                Input: 1

                Output: "One".

                If your language supports it, try using a switch statement. */
             


            Console.WriteLine(Kata.SwitchItUp(1));
        }
    }

    public class Kata
    {
        public static string SwitchItUp(int number)
        {
            return number switch
            {
                0 => "Zero",
                1 => "One",
                2 => "Two",
                3 => "Three",
                4 => "Four",
                5 => "Five",
                6 => "Six",
                7 => "Seven",
                8 => "Eight",
                9 => "Nine",
                _ => "Unknown number"
            };
        }
    }
}
