namespace CodeWarsPractice
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
    
            You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

            All values will be positive integers or floats, or zero.*/

            
            Console.WriteLine(Kata.Plural(0));   // true
            Console.WriteLine(Kata.Plural(1));   // false
            Console.WriteLine(Kata.Plural(5));   // true
            Console.WriteLine(Kata.Plural(1.5)); // true
        }
    }

    // Codewars 
    public class Kata
    {
        public static bool Plural(double n)
        {
            return n != 1.0;
        }
    }
}