using System;
using System.Linq;

namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Surface Area and Volume of a Box
             * 
             * Write a function that returns the total surface area and volume of a box.
             * The given input will be three positive non-zero integers: width, height, and depth.
             * The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, etcetera).
             */

            var result = Kata.Get_size(4, 2, 6);
            Console.WriteLine($"[{string.Join(", ", result)}]");
        }

        public static class Kata
        {
            public static int[] Get_size(int w, int h, int d)
            {
                int volume = w * h * d;
                int surfaceArea = 2 * (w * h + h * d + d * w);
                return new int[] { surfaceArea, volume };
            }
        }
    
    }
}