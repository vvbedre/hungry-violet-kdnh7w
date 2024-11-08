import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Button } from "/components/ui/button";
import { Label } from "/components/ui/label";
import { RadioGroup, RadioGroupItem } from "/components/ui/radio-group";

const questions = [
  {
    id: 1,
    question: 'How likely are you to doze off or fall asleep while sitting and reading, such as reading a book?',
  },
  {
    id: 2,
    question: 'How likely are you to doze off or fall asleep while watching TV?',
  },
  {
    id: 3,
    question: 'How likely are you to doze off or fall asleep while sitting in a public place, such as a bus or train?',
  },
  {
    id: 4,
    question: 'How likely are you to doze off or fall asleep while driving or riding in a car?',
  },
  {
    id: 5,
    question: 'How likely are you to doze off or fall asleep while talking to someone?',
  },
  {
    id: 6,
    question: 'How likely are you to doze off or fall asleep while relaxing or taking a break?',
  },
  {
    id: 7,
    question: 'How likely are you to doze off or fall asleep while sitting quietly after a lunch without alcohol?',
  },
  {
    id: 8,
    question: 'How likely are you to doze off or fall asleep in a car while stopped for a few minutes in traffic?',
  },
];

const answers = [
  { id: 1, answer: 'Never dozes' },
  { id: 2, answer: 'Slight chance of dozing' },
  { id: 3, answer: 'Moderate chance of dozing' },
  { id: 4, answer: 'High chance of dozing' },
];

const EpworthSleepinessScale = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswerChange = (questionId, answerId) => {
    setSelectedAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answerId }));
    const newScore = Object.values({ ...selectedAnswers, [questionId]: answerId }).reduce((acc, answerId) => acc + answerId, 0);
    setTotalScore(newScore);
  };

  const handleSubmit = () => {
    console.log('Submit:', selectedAnswers, totalScore);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Epworth Sleepiness Scale</CardTitle>
        <CardDescription>Please answer the following questions to assess your daytime sleepiness.</CardDescription>
      </CardHeader>
      <CardContent>
        {questions.map((question) => (
          <div key={question.id} className="mb-4">
            <Label>{question.question}</Label>
            <RadioGroup defaultValue={1} onChange={(value) => handleAnswerChange(question.id, value)}>
              {answers.map((answer) => (
                <div key={answer.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={answer.id} id={answer.id} />
                  <Label htmlFor={answer.id}>{answer.answer}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Submit</Button>
        <p>Total Score: {totalScore}</p>
        <p>Interpretation:</p>
        <ul>
          <li>0-5: Normal daytime sleepiness</li>
          <li>6-10: Mild daytime sleepiness</li>
          <li>11-15: Moderate daytime sleepiness</li>
          <li>16-24: Severe daytime sleepiness</li>
        </ul>
      </CardFooter>
    </Card>
  );
};

export default EpworthSleepinessScale;