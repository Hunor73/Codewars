using System; // Math.Abs

namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* The highest profit wins!
             
            Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
            Task

            Write a function that returns both the minimum and maximum number of the given list/array.
            Examples (Input --> Output)

            [1,2,3,4,5] --> [1,5]
            [2334454,5] --> [5,2334454]
            [1]         --> [1,1]

            Remarks

            All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

            int[] result = MinMax.minMax(new int[] { 1, 2, 3, 4, 5 });
            Console.WriteLine($"The minimum value is: {result[0]}\t\tThe maximum value is: {result[1]}");

        }

        public class MinMax
        {
            public static int[] minMax(int[] lst)
            {
                int min = lst[0];
                int max = lst[0];
                foreach (int num in lst)
                {
                    if (num < min) min = num;
                    if (num > max) max = num;
                }
                return new int[] { min, max };
            }
        }
    }
}