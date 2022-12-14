using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any())
            {
                return;
            }

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Post Activiy 1",
                    Date = DateTime.Now.AddMinutes(8),
                    Description = "Activity 8 months in future",
                    Category = "film",
                    City = "London",
                    Venue = "Cinema"
                },
                new Activity
                {
                    Title = "Post Activiy 2",
                    Date = DateTime.Now.AddMinutes(2),
                    Description = "Activity 2 months ago",
                    Category = "travel",
                    City = "London",
                    Venue = "Somewhere on the themes"
                },
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}
