'use strict';

angular.module('dataStorage', [])
    .service('testContent', function () {


        var testContent = {
            getTask: function (exerciseNr, taskNr) {
                if (this.content[exerciseNr] && this.content[exerciseNr][taskNr]) {
                    return this.content[exerciseNr][taskNr];
                } else {
                    return false;
                }
            },
            content: [
                null,
                null,
                [
                    {
                        title: "What school activities do you see on the picture?",
                        type: "Vocabulary",
                        questions: [
                            {media: {image: '1.png'}},
                            {media: {image: '2.png'}},
                            {media: {image: '3.png'}},
                            {media: {image: '4.png'}},
                            {media: {image: '5.png'}},
                            {media: {image: '6.png'}}
                        ],
                        answers: ['foggy', 'rainy', 'sunny', 'cloudy', 'windy', 'snowing'],
                        prompts: ['snowing', 'cloudy', 'raining','foggy', 'windy', 'sunny'],
                        exampleIndex: 0
                    },
                    {
                        title: "Label the weather symbols.",
                        type: "Vocabulary",
                        questions: [
                            {text: 'enjoying a field trip', media: {image: '1.png'}},
                            {text: 'working on computer', media: {image: '2.png'}},
                            {text: 'taking a test', media: {image: '3.png'}},
                            {text: 'doing a project', media: {image: '4.png'}},
                            {text: 'giving a presentation', media: {image: '5.png'}},
                            {text: 'practicing yoga', media: {image: '6.png'}}
                        ],
                        answers: ['2', '3', '4', '1', '5', '6'],
                        exampleIndex: 0
                    }
                ],
                null
            ]
        }

        return testContent;
    });