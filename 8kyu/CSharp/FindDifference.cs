using System; // Math.Abs
using System.Linq; // Aggregate

namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Difference of Volumes of Cuboids
             * In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

            For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

            Your function will be tested with pre-made examples as well as random ones.

            If you can, try writing it in one line of code. */

            var result = Kata.FindDifference(new int[] { 2, 2, 3 }, new int[] { 5, 4, 1 });
            Console.WriteLine(result); // Output: 8

        }

        public class Kata
        {
            public static int FindDifference(int[] a, int[] b)
            {
                // Calculates the absolute difference between the volume of cuboid 'a' and cuboid 'b',
                // using Aggregate to multiply the three dimensions of each array.
                return Math.Abs(a.Aggregate(1, (acc, x) => acc * x) - b.Aggregate(1, (acc, x) => acc * x));
            }
        }
    }
}