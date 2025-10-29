using System;
using System.Linq;

namespace Codewars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Return the day 
             * Complete the function which returns the weekday according to the input number:

                1 returns "Sunday"
                2 returns "Monday"
                3 returns "Tuesday"
                4 returns "Wednesday"
                5 returns "Thursday"
                6 returns "Friday"
                7 returns "Saturday"
                Otherwise returns "Wrong, please enter a number between 1 and 7" */

            for (int i = 1; i <= 7; i++)
            {
                Console.WriteLine(Kata.WhatDay(i));
            }
            Console.WriteLine();

            for (int i = 1; i <= 7; i++)
            {
                Console.WriteLine(Kata.WhatDay2(i));
            }
        }

        public static class Kata
        {
                public static string WhatDay(int day)
                {
                    // Switch Case 

                    switch (day)
                    {
                        case int n when (n == 1):
                            return ("Sunday");
                        
                        case int n when (n == 2):
                            return ("Monday");
                        
                        case int n when (n == 3):
                            return ("Tuesday");
                        
                        case int n when (n == 4):
                            return ("Wednesday");
                        
                        case int n when (n == 5):
                            return ("Thursday");
                        
                        case int n when (n == 6):
                            return ("Friday");
                        
                        case int n when (n == 7):
                            return ("Saturday");
                        
                        default:
                            return ("Wrong, please enter a number between 1 and 7");
                        
                    }                    
                }

            public static string WhatDay2(int day)
            {
                // Switch expression
                return day switch
                {
                    1 => "Sunday",
                    2 => "Monday",
                    3 => "Tuesday",
                    4 => "Wednesday",
                    5 => "Thursday",
                    6 => "Friday",
                    7 => "Saturday",
                    _ => "Wrong, please enter a number between 1 and 7" // Default (_)
                };
            }
        }    
    }
}