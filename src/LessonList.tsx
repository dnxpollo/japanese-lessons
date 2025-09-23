import React, { useState } from 'react';
import LessonCard from './LessonCard';

interface Lesson {
  title: string;
  description: string;
  examples: string[];
  phrases?: string[];
}

const lessonContent: Record<string, Lesson> = {
  Hiragana: {
    title: 'Hiragana',
    description: 'O alfabeto fonético básico do japonês.',
    examples: ['あ (a)', 'い (i)', 'う (u)', 'え (e)', 'お (o)'],
    phrases: ['あい (ai) - amor', 'うえ (ue) - cima'],
  },
  Katakana: {
    title: 'Katakana',
    description: 'Usado para palavras estrangeiras e nomes científicos.',
    examples: ['ア (a)', 'イ (i)', 'ウ (u)', 'エ (e)', 'オ (o)'],
    phrases: ['アイス (aisu) - sorvete', 'ホテル (hoteru) - hotel'],
  },
  Kanji: {
    title: 'Kanji',
    description: 'Ideogramas com significados complexos.',
    examples: ['日 - sol', '月 - lua', '山 - montanha', '水 - água'],
    phrases: ['日本 (nihon) - Japão', '山水 (sansui) - paisagem'],
  }
};

const LessonList: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const handleLessonClick = (title: string) => {
    setActiveLesson(title);
  };

  return (
    <section>
      <h2>Suas lições</h2>
      <div className="lesson-list">
        {Object.values(lessonContent).map((lesson, index) => (
          <LessonCard
            key={index}
            title={lesson.title}
            description={lesson.description}
            onClick={() => handleLessonClick(lesson.title)}
          />
        ))}
      </div>

      {activeLesson && (
        <div className="lesson-content">
          <h3>{lessonContent[activeLesson].title}</h3>
          <p>{lessonContent[activeLesson].description}</p>

          <h4 className="mt-4 font-semibold">Exemplos:</h4>
          <ul className="list-disc ml-6">
            {lessonContent[activeLesson].examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>

          {lessonContent[activeLesson].phrases && (
            <>
              <h4 className="mt-4 font-semibold">Frases:</h4>
              <ul className="list-disc ml-6">
                {lessonContent[activeLesson].phrases!.map((phrase, i) => (
                  <li key={i}>{phrase}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default LessonList;
