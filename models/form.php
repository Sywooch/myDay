<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\helpers\ArrayHelper;

class form extends Model
{

    public $date;
    public $check;
    public static function checkFormData()
    {
      $userId = Yii::$app->user->id;

      $allNameEx = exercise::getAllExercises($userId);

        return ArrayHelper::map($allNameEx, 'name', 'name');
        
    }

    public function rules()
    {
        return [
            [['date'], 'required'],
            ['check', 'default', 'value' => 0]
        ];
    }
}