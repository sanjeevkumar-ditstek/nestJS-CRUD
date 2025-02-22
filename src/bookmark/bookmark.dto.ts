import { IsNotEmpty, IsString, IsNumber, IsUrl } from 'class-validator';

export class getAll {
  @IsNotEmpty()
  limit;

  @IsNotEmpty()
  page;

  @IsNotEmpty()
  @IsString()
  sortBy;

  @IsNotEmpty()
  @IsString()
  sortOrder;
}

export class createBookmark {
  @IsNotEmpty()
  @IsString()
  name;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  url;

  @IsNotEmpty()
  @IsString()
  userId;
}

export class updateBookmark {
  @IsString()
  name;

  @IsString()
  @IsUrl()
  url;

  @IsString()
  userId;
}

