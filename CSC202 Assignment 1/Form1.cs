/*
 Name; Eric Amoh Adjei
 Date; 9/10/2022
 Windows Forms App .Net
Project start time; 4:45 PM To 6:15 PM
 Estimate number of hours it took = 1HR : 30MIN
 */

using System;// C# auto generated files or document type
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CSC202_Assignment_1
{
    public partial class RolldieB : Form
    {
        int number;
        double numToRun;
        int die;
        int name;
        public RolldieB()
        {
            InitializeComponent();
        }

        private void Submitnow_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Submission Successful, Thank You!");
        }

        private void CheckInB_Click(object sender, EventArgs e)
        {
            if (int.TryParse(textBox1.Text, out number))
            {
                MessageBox.Show("Valid"); //  output Message if valid
            }
            else // makes desition on output if wrong item is inserted than expected
            {
                MessageBox.Show("Not valid");
            }
        }

        private void RoundDecimal_Click(object sender, EventArgs e)
        {
            if (double.TryParse(textBox2.Text, out numToRun))
            {
                numToRun = Math.Round((Double)numToRun, 2);
                textBox2.Text = numToRun.ToString();
            }
            else
            {
                MessageBox.Show("Sorry! Not a valid number"); // Message to output Sorry! Not a valid number
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Random random = new Random();
            die = random.Next(1, 10);//Added a randam number to generate from 1 to 10
            MessageBox.Show("random num = " + die);
            die++; //EA equvalent to die = die + 1;
            MessageBox.Show("random num + 1 = " + die);// this will add 1 to the random number generated
            die = die - 4;
            MessageBox.Show("random num -4 = " + die);// this also modify the random number by subtracting 4 form the result.
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (int.TryParse(textBox4.Text, out name)) // was trying hard to validate letters not a number, but cant find the right sentiment.
                
            {
                MessageBox.Show("Valid");
            }
            else
            {
                MessageBox.Show("Not valid");

            }
        }
    }
}
