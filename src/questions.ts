import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    type: 'logical',
    text: "Which word does not belong with the others?",
    options: ["Leopard", "Cougar", "Elephant", "Lion"],
    correctAnswer: 2,
    explanation: "Leopard, Cougar, and Lion are all felines (cats), while an Elephant is a pachyderm."
  },
  {
    id: 2,
    type: 'mathematical',
    text: "Complete the sequence: 2, 6, 12, 20, 30, ...",
    options: ["40", "42", "44", "46"],
    correctAnswer: 1,
    explanation: "The difference between terms increases by 2: (6-2=4), (12-6=6), (20-12=8), (30-20=10). The next difference is 12, so 30 + 12 = 42."
  },
  {
    id: 3,
    type: 'spatial',
    text: "If you rotate a square 45 degrees clockwise, then flip it horizontally, what shape do you have?",
    options: ["Diamond", "Square", "Rectangle", "Triangle"],
    correctAnswer: 0,
    explanation: "A square rotated 45 degrees looks like a diamond. Flipping it horizontally maintains the diamond shape."
  },
  {
    id: 4,
    type: 'verbal',
    text: "Book is to Reading as Fork is to ...",
    options: ["Drawing", "Writing", "Eating", "Stirring"],
    correctAnswer: 2,
    explanation: "A book is a tool used for reading; a fork is a tool used for eating."
  },
  {
    id: 5,
    type: 'logical',
    text: "All humans are mortal. Socrates is human. Therefore, Socrates is ...",
    options: ["Divine", "Mortal", "Greek", "Wise"],
    correctAnswer: 1,
    explanation: "This is a classic syllogism. If the premises are true, the conclusion must be that Socrates is mortal."
  },
  {
    id: 6,
    type: 'mathematical',
    text: "What is 15% of 200?",
    options: ["20", "25", "30", "35"],
    correctAnswer: 2,
    explanation: "15% of 200 = 0.15 * 200 = 30."
  },
  {
    id: 7,
    type: 'spatial',
    text: "Which of these shapes can be folded to form a cube?",
    options: ["A cross shape with 6 squares", "A T-shape with 5 squares", "An L-shape with 6 squares", "A straight line of 6 squares"],
    correctAnswer: 0,
    explanation: "A cross shape with 6 squares (a net) can be folded into a cube."
  },
  {
    id: 8,
    type: 'verbal',
    text: "Find the synonym for 'Meticulous'.",
    options: ["Careless", "Thorough", "Fast", "Lazy"],
    correctAnswer: 1,
    explanation: "Meticulous means showing great attention to detail; very careful and precise. Thorough is the closest synonym."
  },
  {
    id: 9,
    type: 'logical',
    text: "If some A are B, and all B are C, then ...",
    options: ["All A are C", "Some A are C", "No A are C", "All C are A"],
    correctAnswer: 1,
    explanation: "Since some A are B, and every B is a C, those specific A that are B must also be C."
  },
  {
    id: 10,
    type: 'mathematical',
    text: "Solve: (8 + 2) * (5 - 3) / 2",
    options: ["5", "10", "15", "20"],
    correctAnswer: 1,
    explanation: "Following PEMDAS: (10) * (2) / 2 = 20 / 2 = 10."
  },
  {
    id: 11,
    type: 'spatial',
    text: "A clock shows 3:15. What is the angle between the hands?",
    options: ["0 degrees", "7.5 degrees", "15 degrees", "22.5 degrees"],
    correctAnswer: 1,
    explanation: "At 3:15, the minute hand is exactly at 15 minutes. The hour hand has moved 1/4 of the way between 3 and 4. Since each hour is 30 degrees, 1/4 of 30 is 7.5 degrees."
  },
  {
    id: 12,
    type: 'verbal',
    text: "Which word is the antonym of 'Abundant'?",
    options: ["Plentiful", "Scarce", "Ample", "Copious"],
    correctAnswer: 1,
    explanation: "Abundant means existing in large quantities; scarce means insufficient for the demand."
  },
  {
    id: 13,
    type: 'logical',
    text: "If you are in a race and you pass the person in second place, what place are you in?",
    options: ["First", "Second", "Third", "Last"],
    correctAnswer: 1,
    explanation: "If you pass the person in second, you take their spot, which is second place."
  },
  {
    id: 14,
    type: 'mathematical',
    text: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
    options: ["$0.10", "$0.05", "$0.01", "$0.15"],
    correctAnswer: 1,
    explanation: "Let ball = x. Bat = x + 1. x + (x + 1) = 1.10 => 2x = 0.10 => x = 0.05."
  },
  {
    id: 15,
    type: 'spatial',
    text: "How many triangles are in a pentagram (five-pointed star)?",
    options: ["5", "10", "15", "20"],
    correctAnswer: 1,
    explanation: "There are 5 small triangles at the points and 5 larger triangles formed by the intersections."
  },
  {
    id: 16,
    type: 'verbal',
    text: "Ocean is to Water as Desert is to ...",
    options: ["Sand", "Cactus", "Heat", "Sun"],
    correctAnswer: 0,
    explanation: "An ocean is primarily composed of water; a desert is primarily composed of sand."
  },
  {
    id: 17,
    type: 'logical',
    text: "If today is Monday, what day will it be in 100 days?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    correctAnswer: 1,
    explanation: "100 divided by 7 is 14 with a remainder of 2. Two days after Monday is Wednesday."
  },
  {
    id: 18,
    type: 'mathematical',
    text: "If 3 cats can catch 3 rats in 3 minutes, how many cats are needed to catch 100 rats in 100 minutes?",
    options: ["3", "33", "100", "1"],
    correctAnswer: 0,
    explanation: "The rate is 1 rat per cat per 3 minutes. In 100 minutes, one cat can catch 33.3 rats. So 3 cats can catch 100 rats in 100 minutes."
  },
  {
    id: 19,
    type: 'spatial',
    text: "Which number replaces the question mark? [2, 4, 8], [3, 9, 27], [4, 16, ?]",
    options: ["32", "48", "64", "80"],
    correctAnswer: 2,
    explanation: "The pattern is n, n^2, n^3. 4^3 = 64."
  },
  {
    id: 20,
    type: 'verbal',
    text: "Find the odd one out.",
    options: ["Paris", "London", "Berlin", "New York"],
    correctAnswer: 3,
    explanation: "Paris, London, and Berlin are European capitals. New York is not a capital city (and is in North America)."
  },
  {
    id: 21,
    type: 'logical',
    text: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.",
    options: ["True", "False", "Cannot be determined", "Only some"],
    correctAnswer: 0,
    explanation: "This is a transitive relation in logic. If A=B and B=C, then A=C."
  },
  {
    id: 22,
    type: 'mathematical',
    text: "What is the next number in the series: 1, 1, 2, 3, 5, 8, 13, ...",
    options: ["18", "21", "24", "27"],
    correctAnswer: 1,
    explanation: "This is the Fibonacci sequence, where each number is the sum of the two preceding ones. 8 + 13 = 21."
  },
  {
    id: 23,
    type: 'spatial',
    text: "How many faces does a standard hexagonal prism have?",
    options: ["6", "7", "8", "12"],
    correctAnswer: 2,
    explanation: "A hexagonal prism has 2 hexagonal bases and 6 rectangular sides, totaling 8 faces."
  },
  {
    id: 24,
    type: 'verbal',
    text: "Which word is most similar to 'Resilient'?",
    options: ["Fragile", "Tough", "Flexible", "Stubborn"],
    correctAnswer: 1,
    explanation: "Resilient means able to withstand or recover quickly from difficult conditions. 'Tough' is the closest synonym."
  },
  {
    id: 25,
    type: 'logical',
    text: "A is taller than B. C is shorter than A. Is C taller than B?",
    options: ["Yes", "No", "Maybe", "Insufficient data"],
    correctAnswer: 2,
    explanation: "We know A > B and A > C, but we don't know the relationship between B and C."
  },
  {
    id: 26,
    type: 'mathematical',
    text: "If a car travels at 60 mph, how many feet does it travel in one second? (1 mile = 5280 feet)",
    options: ["60", "88", "120", "150"],
    correctAnswer: 1,
    explanation: "60 miles/hour = 1 mile/minute = 5280 feet / 60 seconds = 88 feet/second."
  },
  {
    id: 27,
    type: 'spatial',
    text: "If you look at a transparent cube from directly above one of its corners, how many edges do you see meeting at that point?",
    options: ["2", "3", "4", "6"],
    correctAnswer: 1,
    explanation: "In a cube, exactly 3 edges meet at every vertex (corner)."
  },
  {
    id: 28,
    type: 'verbal',
    text: "What is the meaning of 'Ephemeral'?",
    options: ["Eternal", "Short-lived", "Beautiful", "Mysterious"],
    correctAnswer: 1,
    explanation: "Ephemeral means lasting for a very short time."
  },
  {
    id: 29,
    type: 'logical',
    text: "Which of the following is the opposite of 'Logical'?",
    options: ["Rational", "Analytical", "Intuitive", "Irrational"],
    correctAnswer: 3,
    explanation: "Irrational is the direct antonym of logical."
  },
  {
    id: 30,
    type: 'mathematical',
    text: "A farmer has 17 sheep and all but 9 die. How many are left?",
    options: ["8", "9", "17", "0"],
    correctAnswer: 1,
    explanation: "The phrase 'all but 9 die' means 9 sheep are still alive."
  }
];
